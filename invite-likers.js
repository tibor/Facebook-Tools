document.querySelectorAll('div[aria-Label=Reactions] div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 div[style="padding-left: 8px; padding-right: 8px;"]').forEach(function(row){
    button = row.querySelector('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5')
    if(button.innerText === 'Invite'){
        button.click()
    }else{
        row.parentNode.removeChild(row)
    }
})
