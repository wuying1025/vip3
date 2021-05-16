import request from "../utils/request"

// 添加等级
export function addLevel(data){
    return request({
        url:"/insertOneLevel",
        method:"post",
        data
    })
}