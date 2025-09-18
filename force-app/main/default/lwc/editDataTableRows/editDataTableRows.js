import { LightningElement, wire, api } from 'lwc';
import getContactBasedOnAccount from '@salesforce/apex/contactController.getContactBasedOnAccount';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

const columns = [
    { label: "First Name", fieldName:"FirstName", editable: true},
    { label: "Last Name", fieldName: "LastName", editable: true},
    { label: "Title", fieldName: "Title", editable: true},
    { label: "Phone", fieldName:"Phone", type:"phone", editable: true},
    { label: "Email", fieldName:"Email", type:"email", editable: true}
];
export default class EditDataTableRows extends LightningElement {
@api recordId;
contactData = [];
columns = columns;
draftValues = [];
contactRefreshProp;

    @wire(getContactBasedOnAccount,{
        accountId: "$recordId"
    }) 
    getContactOutput(result){
        this.contactRefreshProp = result;
        if(result.data){
            this.contactData = result.data;
        }else if(result.error){
            console.log("Error while Loading Records");
        }
    }
    async saveHandler(event){
        //updateRecord or Apex Class

        //Access the draft values
        let records = event.detail.draftValues // Array of modified records
        let updateRecordsArray = records.map((currItem) => {
            let fieldInput = { ...currItem };
            return {
                fields: fieldInput
            };
        });

        this.draftValues = []
        let updateRecordsArrayPromise = updateRecordsArray.map((currItem) => updateRecord(currItem));
        await Promise.all(updateRecordsArrayPromise);

        const toastEvent = new ShowToastEvent({
            title: "Success",
            message:"Records Updated Successfully",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);

        await refreshApex(this.contactRefreshProp);
    }
}