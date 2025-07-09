document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleBtn = document.getElementById('shuffle-button');
    let lastInputs = {};
    const templates = [
        (n, a, p, v, pl) => `${p} went to the ${a} ${n} to ${v} in ${pl}.`,
        (n, a, p, v, pl) => `In ${pl}, ${p} found a ${a} ${n} and decided to ${v}.`,
        (n, a, p, v, pl) => `Why did ${p} ${v} the ${a} ${n} at ${pl}?`,
        (n, a, p, v, pl) => `The ${a} ${n} wanted to ${v} with ${p} in ${pl}.`,
        (n, a, p, v, pl) => `${p} couldn't believe the ${a} ${n} could ${v} at ${pl}!`
    ];
    function getInputs() {
        return {
            noun: document.getElementById('noun').value.trim(),
            adjective: document.getElementById('adjective').value.trim(),
            person: document.getElementById('person').value.trim(),
            verb: document.getElementById('verb').value.trim(),
            place: document.getElementById('place').value.trim()
        };
    }
    function isValid(inputs) {
        return Object.values(inputs).every(val => val.length > 0);
    }
    function generateStory(inputs, templateIdx) {
        return templates[templateIdx](inputs.noun, inputs.adjective, inputs.person, inputs.verb, inputs.place);
    }
    let lastTemplateIdx = null;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = getInputs();
        if (!isValid(inputs)) return;
        lastInputs = inputs;
        lastTemplateIdx = Math.floor(Math.random() * templates.length);
        storySpan.textContent = generateStory(inputs, lastTemplateIdx);
    });
    shuffleBtn.addEventListener('click', function() {
        if (!isValid(lastInputs)) return;
        let idx;
        do {
            idx = Math.floor(Math.random() * templates.length);
        } while (templates.length > 1 && idx === lastTemplateIdx);
        lastTemplateIdx = idx;
        storySpan.textContent = generateStory(lastInputs, idx);
    });
});
