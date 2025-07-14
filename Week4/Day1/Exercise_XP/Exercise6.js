(function(numChildren, partnerName, geoLocation, jobTitle) {
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('fortune').textContent = message;
    });
})(4, "Alice", "Paris", "Web Developer");
