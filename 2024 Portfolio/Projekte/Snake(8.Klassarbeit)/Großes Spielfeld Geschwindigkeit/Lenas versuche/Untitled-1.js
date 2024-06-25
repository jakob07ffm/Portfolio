<script language="JavaScript">
 var ergebnistext=prompt("Wie heißen Sie?","");
   if(ergebnistext==""||ergebnistext==null)
      history.back();
else
   alert("Hallo, "+ ergebnistext);
   function auswert()
      {
      if (document.form5.namensfeld.value=="Name?") alert("Faulheit wird bestraft werden!"); 
      else alert("ok " + document.form5.namensfeld.value + "!");
      }
</script>
 
<form name="form5">
   <input type=text size=30 name="namensfeld" value="Name?">
   <input type=button value="fertig" onClick="auswert()">
</form>