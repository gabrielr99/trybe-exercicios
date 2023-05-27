const newEmployees = (employeesGenerator) => {
  const employees = {
    id1: employeesGenerator('Pedro Guerra Brasil'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeesGenerator = (fullName) => {
  return {fullName, email: `${fullName.toLowerCase().replaceAll(' ', '_')}@betrybe.com.br`};
  //ou
  // return {fullName, email: `${fullName.toLowerCase().split(" ").join("_")}@betrybe.com.br`};
}

console.log(newEmployees(employeesGenerator));