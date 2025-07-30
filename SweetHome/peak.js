function peakAlert() {
    const based = prompt('You sigma?');
    switch (based) {
        case 'Yes.':
            console.log('Peak. Peak. Peak alert! Peak alert!');
            break;

        case 'No.':
            console.log('Aw, dude!');
            break;

        default:
            console.log('Try again, noob.');
            break;

    }
}