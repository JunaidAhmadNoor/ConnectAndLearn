import { v2 as cloudinary } from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: "dbbtljykn", 
  api_key: "975176948971572", 
  api_secret: "Fr3ZP0Wjld66HgS7yQkzROgJVq4", 
});

const opts={
    overwrite:true,
    invalidate:true,
    resource_type:"auto",
};

export default (image)=>{
    return new Promise ((resolve,reject)=>{
        cloudinary.uploader.upload(image,opts,(error,result)=>{
            if(result&&result.secure_url){
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject({message:error.message});
        });
    });
}