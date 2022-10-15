export const getInitials = (name) => {
    const split = name.split(' ');
    let initials = '';
    split.forEach(item => {
        initials += `${item[0]} `
    });

    return initials;

}