import React from 'react';
import InputField from './inputField';
import Labs from './labs';

 const inputForm = () => {
    return (
    <div className="container-fluid Form">
      
       <h3>User Input</h3>
     <form className="input-form">
<InputField label={"Name :"}/>
<InputField label={"Login :"}/>
<Labs label={"Reference lab :" }/>
<br/>
<InputField  type ={"search"}
            styleClass={"col-sm-4"}
           label={"XRD Search :" }/>

<InputField label={"XRD SID :"}/>
<InputField label={"XRD OID :"}/>
<InputField label={"XRD Code :"}/>
<InputField styleClass={"col-sm-4"} label={"XRD Content :"}/>
<InputField styleClass={"col-sm-4"} label={"e-mail :"}/>


    </form>
    </div>
    )
}

export default inputForm;
