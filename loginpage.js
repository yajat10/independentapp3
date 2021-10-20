function logintonextpage(){
    patient=document.getElementById("patientnameid").value;
    localStorage.setItem("patientname",patient);
    window.location="commuornon.html"
}