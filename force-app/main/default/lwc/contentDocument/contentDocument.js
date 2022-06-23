import { LightningElement, api } from 'lwc';
import uploadFile from '@salesforce/apex/fileController.fileUploader';

export default class ContentDocument extends LightningElement {

    @api recordId;
    error;
    ContentDocumentId='';

    //Specify formats to be accepted
    get acceptedFormats(){
        return ['.pdf', '.png', '.jpeg', '.jpg'];
    }

    handleUploadFinished(event){
        console.log(event.detail.files);
        this.contentDocumentId = event.detail.files[0].documentId;

        uploadFile({recordId:event.detail.id, cDId:this.contentDocumentId})
        .then(result=>{
            debugger;
        }).catch(error=>{
            this.error = error;
        })

        
    }
}

