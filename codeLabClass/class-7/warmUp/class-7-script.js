function changerBackground(color) {
    console.log('it works')

    document.body.style.backgroungColor = color
}



function colorChanged() {
    console.log('Color Changed');
    consol.log(this.value);
} 

colorPicker.addEventListener('change', colorChanged)

const colorPicker = document.getElementById('colorPicker')
console.log(colorPicker());

document.getElementById('colorForm').addEventListener('submit', () => {
    console.log('Form submitted');
})