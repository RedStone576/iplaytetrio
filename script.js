document.getElementById("a").addEventListener("click", () => urmom("a"))
document.getElementById("b").addEventListener("click", () => urmom("b"))
document.getElementById("c").addEventListener("click", () => urmom("c"))

let lastToggled = "b"

function urmom(h)
{
    const el = document.getElementById(h)

    toggle(el)

    if (a.classList.contains("checkmark") && b.classList.contains("checkmark") && c.classList.contains("checkmark")) toggle(document.getElementById(lastToggled))

    if (el.classList.contains("checkmark")) lastToggled = h
}

function toggle(x)
{
    x.classList.toggle("checkmark")
    x.classList.toggle("notCheckmark")
}
