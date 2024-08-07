<template>
    <el-upload
        name="uploadFile"
        :headers="{ [headersToken]: Cookies.get('token') }"
        :file-list="fileList"
        :disabled="isSingleDragUploadedDisabled"
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
        :on-remove="removeFile"
        :on-exceed="exceedFileAuantity"
        :on-preview="previewFile"
        :drag="drag"
        id="uploadFileContainer"
    >
        <slot>
            <!-- 拖拽上传 -->
            <template v-if="drag">
                <div class="dragUpload" v-if="(singleDrag && fileList.length === 0) || !singleDrag">
                    <el-icon class="el-icon--upload" size="52"><upload-filled /></el-icon>
                    <div class="el-upload__text">点击或将文件拖拽到这里上传</div>
                    <div class="el-upload__tip" v-if="attrs?.accept">支持扩展名：{{ attrs?.accept }}</div>
                </div>
                <div
                    class="dragFile"
                    v-for="(item, index) in fileList"
                    :key="index"
                    v-if="singleDrag && fileList.length > 0"
                >
                    <p class="dragFile-main" @click="previewFile(item)">
                        <el-icon class="cup"><Document /></el-icon>
                        <i class="dragFile-name cup ml-5"> {{ item.name }}</i>
                    </p>
                    <el-icon class="cup" @click.stop="removeDragFile(index)">
                        <Delete />
                    </el-icon>
                </div>
            </template>
            <!-- 常规上传 -->
            <el-button v-else :icon="Plus" :disabled="fileList.length >= attrs?.limit"> 上传文件 </el-button>
        </slot>
        <template #tip>
            <slot name="tip">
                <div class="el-upload__tip" v-if="needDownload">单击文件名可下载文件</div>
            </slot>
        </template>
        <template #file>
            <slot name="file"></slot>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
import { ref, computed, watch, useAttrs } from 'vue';
import { ElMessage, ElNotification, ElLoading } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import Cookies from 'js-cookie';
import { downloadFile } from '../../utils/util.tool';
import type { UploadRawFile, UploadFile, UploadFiles } from 'element-plus';
import type { IMaxSizeItem } from './interface';

const attrs: { [key: string]: any } = useAttrs();

const props = defineProps({
    // 是否拖拽上传
    drag: {
        type: Boolean,
        default: false,
    },
    // 默认的文件列表
    fileList: {
        type: Array,
        default: [],
    },
    // 设置上传的请求头部的token字段名（注意：当token为空时，请求头中不会添加该字段）
    headersToken: {
        type: String,
        default: 'Authorization',
    },
    // loading动画的容器
    loadingContainer: {
        type: String,
        default: '#uploadFileContainer',
    },
    // 是否需要下载
    needDownload: {
        type: Boolean,
        default: false,
    },
    // 通用上传文件大小限制 maxSize 和 maxSizeList 二选一
    maxSize: {
        type: Number,
        default: null,
    },
    // 根据文件类型分别设置上传文件大小限制
    // types: image=图片 video=视频 audio=音频 application=wps/pdf text=txt other=其他文件类型
    maxSizeList: {
        type: Array,
        default: () => [],
    },
    // 是否单个拖拽
    singleDrag: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['onUploadSuccess', 'onRemoveSuccess', 'onPreviewFile']);

const fileList = ref<any[]>([]); // 上传的文件列表
const uploadLoad = ref<any>(null); // 上传loading对象

// 是否拖拽上传成功（只能上传一个文件）
const isSingleDragUploadedDisabled = computed(() => {
    return props.drag && props.singleDrag && fileList.value.length > 0;
});

// 上传前
const beforeUpload = (rawFile: UploadRawFile) => {
    if (!checkAccept(rawFile)) return false;
    if (!checkSize(rawFile)) return false;
    if (!uploadLoad.value) {
        uploadLoad.value = ElLoading.service({
            target: props.loadingContainer,
            text: '上传中...',
        });
    }
};
// 校验允许上传文件后缀名
const checkAccept = (rawFile: UploadRawFile) => {
    const accept = attrs?.accept;
    if (!accept) return true;
    const suffixName = rawFile.name.split('.').pop();
    if (!accept.includes(suffixName)) {
        ElMessage({ plain: true, message: '文件类型不正确', type: 'error' });
        return false;
    }
    return true;
};
// 校验文件大小
const checkSize = (rawFile: UploadRawFile) => {
    const { maxSize, maxSizeList }: any = props;
    const fileSize = rawFile.size / 1024 / 1024; // 文件大小
    const fileType = rawFile.type.split('/')[0]; // 文件类型
    // 通用上传文件大小限制
    if (maxSize && fileSize > maxSize) {
        ElMessage({ plain: true, message: `文件大小不能超过${maxSize}M`, type: 'error' });
        return false;
    }
    // 根据文件类型分别设置上传文件大小限制
    let sizeError = false;
    let typesList = maxSizeList
        .map((item: IMaxSizeItem) => {
            return item.types;
        })
        .flat();
    for (let i = 0; i < maxSizeList.length; i++) {
        if (
            (maxSizeList[i].types.includes(fileType) ||
                (!typesList.includes(fileType) && maxSizeList[i].types.includes('other'))) &&
            fileSize > maxSizeList[i].maxSize
        ) {
            sizeError = true;
            ElMessage({ plain: true, message: maxSizeList[i].errTip, type: 'error' });
            break;
        }
    }
    return !sizeError;
};
// 上传成功
const uploadSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    if (response.code !== 200) {
        uploadFile.status = 'fail';
        uploadFile.url = '';
        ElNotification({
            type: 'error',
            title: '提示',
            message: response.message,
            duration: 3000,
        });
        // 导入失败下载错误链接文件
        response.data && downloadFile(response.data);
    }
    if (response.code === 200 && typeof response.data === 'string') {
        uploadFile.url = response.data;
    }
    fileList.value.push(uploadFile);
    if (fileList.value.length === uploadFiles.length) {
        fileList.value = uploadFiles.filter((k) => k.status === 'success');
        uploadLoad.value.close();
        uploadLoad.value = null;
        fileList.value.length && emit('onUploadSuccess', fileList.value); // 全部上传成功
    }
};
// 删除文件
const removeFile = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    fileList.value = [...uploadFiles];
    emit('onRemoveSuccess', fileList.value);
};
// 超出数量限制
const exceedFileAuantity = () => {
    ElMessage({ plain: true, message: '超出上传数量限制', type: 'error' });
};
// 单击名称-预览文件
const previewFile = (uploadFile: UploadFile) => {
    if (props.needDownload) {
        downloadFile(uploadFile.url!, uploadFile.name);
        return;
    }
    emit('onPreviewFile', uploadFile);
};
// 删除已上传的拖拽文件
const removeDragFile = (index: number) => {
    fileList.value.splice(index, 1);
};

defineExpose({
    fileList,
});
watch(
    () => props.fileList,
    (newVal) => {
        fileList.value = newVal;
    },
    { immediate: true },
);
</script>

<style lang="less" scoped>
.dragUpload,
.dragFile {
    height: 114px;
}
.dragFile {
    .dragFile-main {
        padding: 0 20px;
        width: 100%;
        .dragFile-name {
            color: var(--el-color-primary);
        }
    }
}
</style>
