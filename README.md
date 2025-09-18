# Inline Edit DataTable ✏️📊  

A Salesforce **Lightning Web Component (LWC)** that enables **inline editing** of related records directly in a **lightning-datatable**. This project demonstrates editing **Contact records** related to an **Account**, handling data updates with Apex, and providing real-time UI feedback.  

---

## 🚀 Features  

- 📝 **Inline Editing**  
  - Editable **lightning-datatable** for Contact records.  

- 🔄 **Dynamic Data Fetch**  
  - Used Apex with `@wire` to fetch Contacts based on **Account recordId**.  

- 💾 **Save Updates**  
  - Implemented `updateRecord` to update edited rows.  
  - Mapped `draftValues` to the correct format before saving.  

- 🔔 **User Feedback**  
  - Success messages displayed with **ShowToastEvent**.  

- ♻️ **Data Refresh**  
  - Used `refreshApex` to reload records after updates.  
  - Handled reactive state with tracked properties.  

- 🛠️ **Dynamic Context Loading**  
  - Used `@api recordId` in `meta.xml` to make component context-aware in **Lightning App Builder**.  

---

## 🛠️ Tech Stack  

- **Lightning Web Components (LWC)**  
- **Apex** (Contact record fetching)  
- **updateRecord (lightning/uiRecordApi)**  
- **refreshApex**  
- **ShowToastEvent**  
- **SLDS (Salesforce Lightning Design System)**  

---
