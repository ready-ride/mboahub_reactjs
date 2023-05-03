import { useState } from 'react';


export const useUploadImage = () => {
  const [files, setFiles] = useState("");
  const [urls, setUrls] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);

  const uploadImage = e => {
    setImageLoading(true);
    e.preventDefault();
    Object.entries(files).map(image => {
        const data = new FormData()
        data.append("file", image[1])
        data.append("upload_preset", process.env.REACT_APP_HOUSE_PRESET)
        data.append("cloud_name",process.env.REACT_APP_CLOUDINARY_NAME)
  
        fetch(process.env.REACT_APP_CLOUDINARY_URL, {method:"post", body: data})
            .then(resp => resp.json())
            .then(data => {
                setUrls(prevState => ([...prevState, data.url]));
            })
            .catch(err => console.log(err))
  
            return 0;
        })
  
    setImageLoading(false);
    setFiles("");
  }
  
  const  handleFileChange = e => {
   setFiles(e.target.files);
  }

  return { files, urls, imageLoading, handleFileChange, uploadImage };
}

export const useSingleImageUpload = () => {
  const [imageUrl, setImageUrl] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  const [imageCoverUrl, setImageCoverUrl] = useState();
  const [imageCoverLoading, setImageCoverLoading] = useState(false);

  const imageUpload = imageFile => {
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
  
  const handleImageUpload = event => {
    setImageLoading(true);
    const fileImage = event.target.files[0];
  
    imageUpload(fileImage)
    .then(imageUrl => {
       setImageUrl(imageUrl);
       setImageLoading(false);
       console.log(imageUrl)
    })
    .catch(err => {
        setImageLoading(false);
        console.log(err);
    })
  };

  const handleCoverImageUpload = event => {
    setImageCoverLoading(true);
    const fileImage = event.target.files[0];

    imageUpload(fileImage)
    .then(imageUrl => {
       setImageCoverUrl(imageUrl);
       setImageCoverLoading(false);
       console.log(imageUrl)
    })
    .catch(err => {
        setImageCoverLoading(false);
        console.log(err);
    })
  }

  return { imageUrl, imageLoading, imageCoverUrl, imageCoverLoading, handleImageUpload, handleCoverImageUpload };
}