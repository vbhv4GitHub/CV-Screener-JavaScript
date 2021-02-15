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

let currentIndex=-1;

// => CV Iterator
function cvIteratorNext(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            currentIndex++;
            nextIndex = currentIndex;
            // --> Using ternary operator.
            return nextIndex < profiles.length ? { value: profiles[nextIndex], done: false } : { done: true };
        }
    }
}

function cvIteratorPrevious(profiles) {
    let nextIndex2 = currentIndex;
    console.log("Defining cvInteratorPrevious Here.");
    return {
        previous: function () {
            currentIndex--;
            nextIndex2 = currentIndex;
            return (nextIndex2 <= profiles.length) ? { value: profiles[nextIndex2], done: false } : { done: true };
        }
    }
}

// => Button listner for next and previous buttons
let next = document.getElementById('next');
next.addEventListener('click', nextCV);
let previous = document.getElementById('previous');
previous.addEventListener('click', previousCV);


// Variable to access the profile data of the candidates.
const candidates = cvIteratorNext(data);
const candidates2 = cvIteratorPrevious(data);

nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    if (currentCandidate != undefined) {
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
        alert("You've reached the last application.");
        location.reload();
    }

}

function previousCV() {
    const currentCandidate = candidates2.previous().value;
    if (currentCandidate != undefined) {
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
        alert("You've reached first application.");
        location.reload();
    }

}
