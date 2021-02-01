// inheritance when you design your objects what they are
// composition when you design your objects what they do

// https://youtu.be/wfMtDGfHWpA

const barker = state => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed)
});

const killer = state => ({
  kill: () => console.log('I can kill')
});

// barker({ name: 'karo' }).bark();

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };

  return {
    ...barker(state),
    ...driver(state),
    ...killer(state),
    getPosition: () => {
      return state.position;
    }
  };
};

const contigo = murderRobotDog('Contigo');
contigo.bark();
contigo.drive();
contigo.drive();
const contigoPosition = contigo.getPosition();
console.log('contigoPosition :>> ', contigoPosition);

contigo.bark();
contigo.kill();
// composition is easier from the start
