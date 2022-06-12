

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

// M.toast({html: 'Welcome!'})

const gestures = [
  "he lowered his head",
  "she hung her head",
  "he ducked",
  "she bowed her head",
  "he covered his eyes with a hand",
  "she pressed her hands to her cheeks",
  "she raised her chin",
  "he lifted his chin",
  "her hands squeezed into fists",
  "his hands tightened into fists",
  "she clenched her fists",
  "she balled her fists",
  "he unclenched his fists",
  "her arms remained at her sides",
  "he shrugged",
  "she gave a half shrug",
  "he lifted his shoulder in a half shrug",
  "she gave a dismissive wave of her hand",
  "she raised a hand in greeting",
  "he waved",
  "she held up her hands",
  "he lifted his hands",
  "she held up her palms",
  "he threw his hands in the air",
  "she brushed her palms together",
  "he rubbed his hands together",
  "she made a steeple of her fingers",
  "he spread his hands",
  "she gesticulated",
  "he waved his hands",
  "she clapped her hands",
  "he snapped his fingers",
  "she held up a finger",
  "he pointed",
  "she gestured with a thumb",
  "he jerked his thumb toward…",
  "she extended her middle finger toward him",
  "he gave her the finger",
  "she gave him the thumbs up",
  "she put her hands on her hips",
  "she shoved her hands in her pockets",
  "he jammed his hands in his front pockets",
  "she rested a hand on her hip",
  "she jutted out her hip",
  "she folded her arms",
  "he crossed his arms over his chest",
  "she hugged herself",
  "he wrapped his arms around himself",
  "she rocked back and forth",
  "she spread her arms wide",
  "he held out his arms",
  "she held out her hand",
  "he extended a hand",
  "he shook his head",
  "she nodded",
  "he bobbed his head",
  "she tilted her head",
  "she inclined her head",
  "he jerked her head in the direction of…",
  "she turned her face away",
  "he looked away",
  "his breaths quickened",
  "she panted",
  "his chest rose and fell with rapid breaths",
  "she took in a deep breath",
  "he drew in a long breath",
  "she took in a sharp breath",
  "he gasped",
  "she held her breath",
  "he let out a harsh breath",
  "she exhaled",
  "he blew out his cheeks",
  "she snorted",
  "she laughed",
  "he giggled",
  "he chuckled",
  "she rubbed her shoulder",
  "he kneaded his shoulder",
  "he rolled his shoulders",
  "she tensed her shoulders",
  "he massaged the back of his neck",
  "she rubbed her temples",
  "she rubbed her hands on her thighs",
  "she ran her hand through her hair",
  "he raked his fingers through his hair",
  "he shoved his hair back away from his face",
  "she wrapped a curl around her finger",
  "she tucked a lock of hair behind her ear",
  "she undid her ponytail and shook out her hair",
  "she tossed her hair",
  "he buried his hands in his hair",
  "he scratched his beard",
  "she tugged at her earlobe",
  "he bit a nail",
  "she chewed on a cuticle",
  "she inspected her fingernails",
  "she picked a piece of lint from her sleeve",
  "she fiddled with her bracelet",
  "he twisted his earring",
  "she played with her cell phone",
  "he tugged at his shirt",
  "she smoothed down her skirt",
  "she scratched her nose",
  "he scratched his head",
  "he rubbed his forehead",
  "she rubbed her eyes",
  "she pinched the bridge of her nose",
  "he held his nose",
  "she smacked her forehead",
  "he facepalmed",
  "she covered her mouth with her hand",
  "she pressed her fingers to her lips",
  "he held his finger up to his lips",
  "he rubbed his chin",
  "she pressed a hand to her throat",
  "he clutched his chest",
  "he leaned against the wall",
  "she bounced on her toes",
  "she jumped up and down",
  "he tapped his foot",
  "she stomped her foot",
  "she folded her hands in her lap",
  "she drummed her fingers on the table",
  "he tapped his fingers on the table",
  "he slammed his hand on the table",
  "she pounded her fist on the table",
  "she set her palms down flat on the table",
  "he rested his hands on the table",
  "she set her hands on the table, palms up",
  "he leaned back in his chair",
  "she hooked her feet around the chair legs",
  "he gripped the arm of the chair",
  "she put her hands behind her head",
  "he put his feet on the desk",
  "he fidgeted",
  "he sprawled out",
  "he put his feet on the desk",
  "she cringed",
  "he shuddered",
  "she flinched",
  "he shivered",
  "she trembled",
  "his body shook",
  "she cowered",
  "he shrank from…",
  "she huddled in the corner",
  "he pulled away",
  "she jerked away",
  "he turned away",
  "she jolted upright",
  "he stiffened",
  "she straightened",
  "he tensed",
  "he jumped",
  "she jumped to her feet",
  "he stood up",
  "she rose from her seat",
  "she relaxed",
  "she slouched",
  "her shoulders sagged",
  "she wilted",
  "he went limp",
  "he rolled his shoulders",
  "she squared her shoulders",
  "she clasped her hands behind her back",
  "he puffed out his chest",
  "she thrust out her chest",
  "he propped his chin on his hand",
  "she rested her chin on her palm",
  "he yawned",
  "she stretched",
  "he turned around",
  "she whirled around",
  "he pivoted",
  "she reeled",
  "she stepped away",
  "he paced",
  "she shifted from one foot to the other",
  "she punched the air"
]

let randomGestures = [];
const form = document.getElementById('form'); // grab parent form element

for (let i = 0; i < 9; i++) {
  const random = Math.floor(Math.random() * gestures.length);
  randomGestures.push(gestures[random]);
}

console.log(gestures);

function refreshRandomGestures(){
  randomGestures = [];
  for (let i = 0; i < 9; i++) {
    const random = Math.floor(Math.random() * gestures.length);
    randomGestures.push(gestures[random]);
  }
  console.log(randomGestures)
  randomGestures.forEach((gesture, i) => { // go to each gesture one by one
    const videoOption = document.createElement('div');
    videoOption.className = "videoOption";
  
    // create input
    const newInput = document.createElement('input');
    newInput.type = "checkbox";
    newInput.id = gesture;
    newInput.name = gesture;
    newInput.value = gesture;
    videoOption.appendChild(newInput)
  
    // create text label
    const newLabel = document.createElement('label');
    newLabel.for = gesture;
    newLabel.innerText = gesture;
    videoOption.appendChild(newLabel)
  
  
    // todo append image child
    const newVideo = document.createElement('video')
    newVideo.className = "materialboxed";
    newVideo.src = `./videos/Moreofthis.${i}.mp4`
    console.log(newVideo.src);
    videoOption.appendChild(newVideo)

  
  
    form.appendChild(videoOption);
  })
}



randomGestures.forEach((gesture, i) => { // go to each gesture one by one
  const videoOption = document.createElement('div');
  videoOption.className = "videoOption";

  // create input
  const newInput = document.createElement('input');
  newInput.type = "checkbox";
  newInput.id = gesture;
  newInput.name = gesture;
  newInput.value = gesture;
  videoOption.appendChild(newInput)

  // create text label
  const newLabel = document.createElement('label');
  newLabel.for = gesture;
  newLabel.innerText = gesture;
  videoOption.appendChild(newLabel)


  // todo append image child
  const newVideo = document.createElement('video')
  newVideo.className = "materialboxed";
  newVideo.src = `./videos/Moreofthis.${i}.mp4`
  videoOption.appendChild(newVideo)


  form.appendChild(videoOption);
})