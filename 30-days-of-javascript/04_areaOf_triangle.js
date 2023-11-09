const area = (s1, s2, s3) => {

    let sp = (s1 + s2 + s3) / 2;

    return Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3));
};

console.log(area(5, 6, 7));