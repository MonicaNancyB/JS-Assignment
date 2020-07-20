let ask =(question,yes,no)=>{if(confirm(question))yes()
else no();
}
ask("Do you agree?",Yes=>{alert("You agreed")},
No=>{alert("You cancelled the execution");
}
);