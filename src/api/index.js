import fetch from "@/utils/fetch"
export function test(data) {
    return fetch({
        url: "",
        method: "post",
        data
    })
}