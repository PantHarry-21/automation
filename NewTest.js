// Relationship with primary borrower

Spouse = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[2]'}
Partner = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[3]'}
Parent = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[5]'}
Child = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[5]'}
Relative = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[6]'}
Friend = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[8]'}
Other = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[8]'}

relations = [Spouse,Partner,Parent,Child,Relative,Friend,Other];
var secondary = relations[Math.floor(Math.random() * 6)];