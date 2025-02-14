function hideContainerAndShowText() {
    console.log("Function called"); // Debugging line
    
    const mainContainer = document.getElementById('main-container');
    const newTextContainer = document.getElementById('new-text-container');
    
    console.log(mainContainer, newTextContainer); // Debugging line
    
    if (mainContainer && newTextContainer) {
        mainContainer.style.display = 'none';
        newTextContainer.style.display = 'block';
    } else {
        console.error("Could not find required elements");
    }
}
function hide3rdContainer() {
    console.log("Function called"); // Debugging line
    
    const lastcontainer = document.getElementById('new-text-container');
    const rdcontainer = document.getElementById('3rd-container');
    
    console.log(lastcontainer, rdcontainer); // Debugging line
    
    if (lastcontainer && rdcontainer) {
        lastcontainer.style.display = 'none';
        rdcontainer.style.display = 'block';
    } else {
        console.error("Could not find required elements");
    }
    
}
document.getElementById('open').addEventListener('click', function() {
    document.getElementById('envelope').classList.remove('close');
    document.getElementById('envelope').classList.add('open');
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('envelope').classList.remove('open');
    document.getElementById('envelope').classList.add('close');
});