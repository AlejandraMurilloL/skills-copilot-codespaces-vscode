function skillsMember() {
    return {
        skills: ['Javascript', 'HTML', 'CSS'],
        getSkills: function() {
            return this.skills;
        },
        addSkill: function(skill) {
            this.skills.push(skill);
        }
    }
}