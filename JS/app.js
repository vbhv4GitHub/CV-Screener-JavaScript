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
            return (nextIndex<profiles.length) ? {value: profiles[nextIndex++], done: false} : {done: true};
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

// => Button listner for next button
let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.addEventListener('click', nextCV);
previous.addEventListener('click', previousCV);

function nextCV() {
    let img = document.getElementById('img');
    let profile = document.getElementById('profile');
    img.innerHTML = `<img scr=''></img>`;
    profile.innerHTML = ``;
    
}

function previousCV() {
    let img = document.getElementById('img');
    let profile = document.getElementById('profile');

}
