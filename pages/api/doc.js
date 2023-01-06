const doc = (req, res) => {
    console.log(req);
    let text;
    // switch (req.params) {
    //     case 0:
    //         text = 'Minim tempor sint dolor incididunt exercitation.';
    //         break;
    //     case 1: 
    //         text = 'Ut amet quis proident in sit adipisicing non.';
    //         break;
    //     default:
    //         break;
    // }
    res.send('text');
}

export default doc;