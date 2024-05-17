function findProjectFromListByName (projectName, list) {
    let chosenProject;
    list.forEach(project => {
        if (project.title == projectName) {
            chosenProject = project;
        }
    });

    return chosenProject;
}

export { findProjectFromListByName };