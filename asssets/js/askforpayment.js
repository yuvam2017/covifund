const database = firebase.database();



function uploadRequest() {

      let image = document.getElementById('image').files[0];

      let imageName = image.name;

      const storageRef = firebase.storage().ref('medicalProof/' + imageName);
      //upload image to selected storafge reffeeen

      let uploadTask = storageRef.put(image);
      uploadTask.on('state_changed',
            (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                              console.log('Upload is paused');
                              break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                              console.log('Upload is running');
                              break;
                  }
            },
            (error) => {
                  // Handle unsuccessful uploads
            },
            () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        uploadData(downloadURL);
                        console.log('File available at', downloadURL);
                  });
            }
      );


}
function uploadData(imageURl) {
      const user = firebase.auth().currentUser;
      let name = document.getElementById('name').value;
      let mobile = document.getElementById('mobile').value;
      let account = document.getElementById('account').value;
      let ifsc = document.getElementById('ifsc').value;
      let upi = document.getElementById('upi').value;
      let emer = document.getElementById('Emergency').value;
      let textArea = document.querySelector('.cls859').value;

      console.log(emer);
      database.ref('users/' + user.uid + '/medicalProof/' ).set({
            userName: name,
            Mobile: mobile,
            Account:account,
            IFSC : ifsc,
            UPI : upi,
            UserID : user.uid,
            Medical_Proof : imageURl,
            Emergency_Status : emer,
            More : textArea
      });
      alert("Request Added successfully");

}