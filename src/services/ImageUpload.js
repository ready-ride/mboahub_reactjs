export const imageUpload = imageFile => {
    const data = new FormData()
    data.append("file", imageFile)
    data.append("upload_preset", process.env.REACT_APP_USER_PRESET)
    data.append("cloud_name",process.env.REACT_APP_CLOUDINARY_NAME)

   let res =  fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => data.url)
    .catch(err => err);

    return res;
  };
