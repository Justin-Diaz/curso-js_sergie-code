function clickDate () {
    document.getElementById('clickDate').innerHTML = Date()
}

function mouseOverDate () {
    document.getElementById('mouseOverDate').innerHTML = Date()
}

function mouseOutDate () {
    document.getElementById('mouseOutDate').innerHTML = Date()
}

function keyDownDate () {
    document.getElementById('keyDownDate').innerHTML = Date()
}

function loadDate () {
    setTimeout(() => {
        document.getElementById('loadDate').innerHTML = Date()
    }, 5000);
}

function changeDate () {
    document.getElementById('changeDate').innerHTML = Date()
}
