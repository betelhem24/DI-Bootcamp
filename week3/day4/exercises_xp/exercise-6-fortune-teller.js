(function(numChildren, partnerName, location, jobTitle){
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  const p = document.createElement('p');
  p.textContent = sentence;
  document.body.appendChild(p);
})(3, "Alex", "Paris", "Engineer");
