console.log("Hello world.");

// Array of objects which contain information about the candidates.

const data = [
    {
        name: 'Rohan Das',
        age: 21,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Anil Kapoor',
        age: 23,
        city: 'Kolkata',
        language: 'JavaScript',
        framework: 'Vanilla',
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name: 'Sanjay Kapoor',
        age: 32,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/63.jpg'
    }
];

// => CV Iterator
function cvItertorNext(profiles) {
    let nextIndex=0;
    return {
        next: function() {
            // --> Using ternary operator.
            return nextIndex<profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true};
        }
    }
}

function cvItertorPrevious(profiles, currentIndex) {
    let nextIndex=currentIndex;
    return {
        next: function() {
            // --> Using ternary operator.
            return (nextIndex<profiles.length) ? {value: profiles[--nextIndex], done: false} : {done: true};
        }
    }
}

// => Button listner for next and previous buttons
let next = document.getElementById('next');
let previous = document.getElementById('previous');
next.addEventListener('click', nextCV);
previous.addEventListener('click', previousCV);


// Variable to access the profile data of the candidates.
const candidates = cvItertorNext(data);

nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    if(currentCandidate != undefined) {
    let img = document.getElementById('img');
    let profile = document.getElementById('profile');
    img.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">Age: ${currentCandidate.age}</li>
                            <li class="list-group-item">Location: ${currentCandidate.city}</li>
                            <li class="list-group-item">Language: ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
                        </ul>`;
    }
    else {
        alert("The end of applications.");
        location.reload();
    }
    
}

function previousCV() {
    // Variable to access the profile data of the candidates.
    const candidates = cvItertorNext(data);
    const currentCandidate = candidates.next.value();

    let img = document.getElementById('img');
    let profile = document.getElementById('profile');
    img.innerHTML = `<img src='${currentCandidate.image}'></img>`;
    profile.innerHTML = `<ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">Age: ${currentCandidate.age}</li>
                            <li class="list-group-item">Location: ${currentCandidate.city}</li>
                            <li class="list-group-item">Language: ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
                        </ul>`;
    
}
