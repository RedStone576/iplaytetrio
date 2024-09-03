function urmom(h)
{
    const el = document.getElementById(h)

    el.classList.toggle("checkmark")
    el.classList.toggle("notCheckmark")

    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const c = document.getElementById("c")

    if (a.classList.contains("checkmark") && b.classList.contains("checkmark") && c.classList.contains("checkmark"))
    {
        if (h === "a") 
        {
            a.classList.toggle("checkmark") 
            a.classList.toggle("notCheckmark")
        }

        else if (h === "b") 
        {
            b.classList.toggle("checkmark") 
            b.classList.toggle("notCheckmark")
        }

        else if (h === "c") 
        {
            c.classList.toggle("checkmark") 
            c.classList.toggle("notCheckmark")
        }
    }
}

a.addEventListener("click", () => urmom("a"))
b.addEventListener("click", () => urmom("b"))
c.addEventListener("click", () => urmom("c"))
