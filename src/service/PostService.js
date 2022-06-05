import http from "../http/http";

class PostService {
    addPost(image, title, text, onUploadProgress) {
        let formData = new FormData();

        formData.append("image", image);

        return http.post("/post", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }

    getPosts() {
        return http.get("/post/");
    }
}

export default new PostService();