import React, { useState } from 'react';
import { Button } from '@material-ui/core/';
import { db, storage } from '../database/firebase';
import firebase from 'firebase';

const ImageUpload = ({ username }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progress function
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 1000;
        setProgress(progress);
      },
      (error) => {
        // Error function
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image inside db
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setProgress(0);
            setCaption('');
            setImage(null);
          });
      }
    );
  };

  return (
    <div className='image-upload'>
      <progress className='image-upload-progress' value={progress} max='100' />
      <input
        type='text'
        placeholder='Enter a caption'
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type='file' onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;