import http from "../http/http";

class PostService {
    addPost(image, title, text, onUploadProgress) {
        let formData = new FormData();

        console.log(image);

        formData.append("image", image);
        formData.append("title", title);
        formData.append("text", text);

        return http.post("/post/", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }

    getPosts() {
        return http.get("/post/");
    }
    getPost(rowKey) {
      return http.get("/post/" + rowKey);
    }
    deletePost(rowKey) {
        return http.delete("/post/" + rowKey);
    }
}

export default new PostService();