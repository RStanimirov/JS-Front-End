function printCertificate(grade, student) {
    
    function printCert() {
        printHeader();
        printName(student);
        printGrade(grade);
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(args) {
        console.log(args.join(' '));
    }

    function printGrade(num) {
        if (num >= 2.00 && num <= 2.99) {
            console.log(`Fail (2)`);
        } else if (num >= 3.00 && num <= 3.49) {
            console.log(`Poor (${num.toFixed(2)})`);
        } else if (num >= 3.50 && num <= 4.49) {
            console.log(`Good (${num.toFixed(2)})`);
        } else if (num >= 4.50 && num <= 5.49) {
            console.log(`Very good (${num.toFixed(2)})`);
        } else if (num >= 5.50 && num <= 6.00) {
            console.log(`Excellent (${num.toFixed(2)})`);
        }
    } 

    if (grade >= 2.00 && grade <= 2.99) {
        console.log(`${student.join(' ')} does not qualify`);
    }else if(grade < 2.00 || grade > 6.00) {
        console.log('Grade is not valid!')
    }else{
        printCert();
    }

}

printCertificate(5.25, ['Peter', 'Carter', 'Johnson']);


