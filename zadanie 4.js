let allPlugPower = new Map(); //создёт пустой обьект для дальнейшего использования при подсчете суммы потребляемой мощности.

function Device(name, power) {
  this.name = name;
  this.power = power;
  let allPlugPower = new Map(); //создёт пустой обьект для дальнейшего использования при подсчете суммы потребляемой мощности.
}

function DeviceLight(name, power, purpose) {
  Device.call(this, name, power);
  this.purpose = purpose;
}

function DeviceDosug(name, power, purpose) {
  Device.call(this, name, power);
  this.purpose = purpose;
}

DeviceLight.prototype = new Device();
DeviceDosug.prototype = new Device();

Device.prototype.plugIn = function () {
  allPlugPower.set(this.name, this.power); //при подключении добавляет в обьект allPlugPower пару ключ/значение.
  console.log(
    `Устройство ${this.name} подключено, назначение: ${this.purpose} потребляет ${this.power}W`
  );
};

Device.prototype.unPlug = function () {
  allPlugPower.delete(this.name); // при отключении удаляет из allPlugPower name/значение, если name было добавлено ранее. Или ничего не делает, если такого name не было.
  console.log(`Устройство ${this.name} было отключено`);
  calcPlugPowerSum();
};

function calcPlugPowerSum() {
  let sum = 0;
  allPlugPower.forEach((x) => {
    sum += x;
  });
  console.log(
    `Общее потребление подключенных устройств на данный момент ${sum}W`
  );
}

const pc = new DeviceDosug(`pc`, 300, `досуг`);
pc.plugIn();

const lamp = new DeviceLight(`lamp`, 50, `освещение`);
lamp.plugIn();

const tv = new DeviceDosug(`tv`, 150, `досуг`);
tv.plugIn(); //включяает tv

calcPlugPowerSum();

tv.unPlug(); // отключает tv и удаляет о нём ранее внесенные данные из allPlugPower. также внёс обьявлениве функции calcPlugPowerSum в unPlug.
