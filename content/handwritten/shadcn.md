# Learning Shadcn :-

*(Top right note: Total = 59)*

* **List:** Accordion, Alert dialog, Breadcrumb, ...
* **Most used:** Card, Sheet, Checkbox, Separator, Dialog, Sidebar, Dropdown-menu, Skeleton, Field, Sonner, Form, Spinner, input, Menubar, select

---

## Page 1: Card
* **(1) Card :-**
  * `↳` displays a card with (Header + content + footer).
  * `↳` Card -> outer + shadow + outline etc.
  * `Card Header -> (UI)`
  
  ```jsx
  <Card>
      <CardHeader>
          <CardTitle> Card Title </CardTitle>
          <CardDescription> Card Description </CardDescription>
      </CardHeader>
      <CardContent> 
          (Like input boxes, forms etc) 
      </CardContent>
      <CardFooter>
          <p> Card Footer </p>
      </CardFooter>
  </Card>
  ```

---

## Page 2: Carousel, Checkbox & Combobox
* **(2) Carousel :-**
  * *(Diagram showing a square box with left and right arrows)*
  * `↳ Carousel`
    * `↳ CarouselContent`
      * `{images.map(() => `
        * `<CarouselItem key={index}>`
          * `<Image />`
        * `</CarouselItem>`
      * `)}`
    * `</CarouselContent>`
    * `↳ <CarouselPrevious />`
    * `↳ <CarouselNext />`
  * `</Carousel>`

* **(3) Checkbox**
  ```jsx
  <Checkbox id="terms" />
  <Label htmlFor="terms"> Allow </Label>
  ```

* **(4) Combobox :- It is made using two components (Command + Popover)**
  * *(Box with "framework" and up/down arrows)*
  * `↳ Command + Popover`
  * `↳ When you click on the frameworks, a command dialog will open where you can search & select.`

---

## Page 3: Command Dialog
* **(5) Command :-**
  * **Command Dialog**
    * `↳ Command`
      * `↳ CommandInput`
      * `↳ CommandList`
        * `↳ CommandEmpty` *(If no result match, what we have to show)*
        * `↳ CommandGroup`
          * `↳ CommandItem`
          * `↳ CommandItem`
          * `↳ CommandSeparator`
        * `↳ CommandSeparator (optional)`

  * **eg:** `[open, setOpen] = useState(false);`
    ```jsx
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="..." />
        <CommandList>
            <CommandGroup heading="Suggestions">
                <CommandItem>
                    <Calendar /> <span> Calendar </span>
                </CommandItem>
                <CommandItem>
                    <Smile /> <span> Search Emoji </span>
                </CommandItem>
                {/* Use it multiple times */}
            </CommandGroup>
            <CommandSeparator />
        </CommandList>
    </CommandDialog>
    ```

---

## Page 4: Popover & Date Picker
* **(6) Popover :-**
  * `↳ Popover, PopoverContent, PopoverTrigger`
  
  ```jsx
  <Popover>
      <PopoverTrigger asChild>
          <Button> Open </Button>
      </PopoverTrigger>
      <PopoverContent> ... </PopoverContent>
  </Popover>
  ```

* **(7) Date Picker :-**
  * `[open, setOpen] = useState(false)`
  * `[date, setDate] = useState<Date | undefined>(undefined)`

  ```jsx
  <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
          <Button> {date ? date.toDateString() : "Select Date"} </Button>
      </PopoverTrigger>
      <PopoverContent>
          <Calendar 
              mode="single"
              selected={date}
              onSelect={(date) => { setDate(date); setOpen(false); }}
          />
      </PopoverContent>
  </Popover>
  ```

---

## Page 5: Dialog & Drawer
* **(8) Dialog :-**
  * `-> When dialog open, it over-shadow the Primary window.`
  * `-> Dialog, DialogContent`
  * `↳ DialogTrigger`
  * `↳ DialogContent`
    * `↳ DialogHeader`
      * `↳ DialogTitle`
      * `↳ DialogDescription`

  * **eg:**
    ```jsx
    <Dialog>
        <DialogTrigger asChild>
            <Button> Open Dialog </Button>
        </DialogTrigger>
        <DialogContent> ... </DialogContent>
    </Dialog>
    ```

* **(9) Drawer :- नीचे से खुलके ऊपर आता है पूरे Page पर hide it.** *(Drawer :- Opens from bottom and comes on the whole page to hide it.)*
  * `-> Click anywhere to hide it.`
  * *(Side Note: Dialog -> desktop, mobile-drawer will be better suited)*
  
  ```jsx
  <Drawer>
      <DrawerTrigger asChild>
          <Button> Open Drawer </Button>
      </DrawerTrigger>
      <DrawerContent> header + body + footer </DrawerContent>
      <DrawerFooter>
          <DrawerClose asChild>
              <Button> Cancel </Button>
          </DrawerClose>
      </DrawerFooter>
  </Drawer>
  ```

---

## Page 6: Dropdown Menu & Field
* **(10) Dropdown Menu :-**
  * `DropdownMenu`
    * `↳ DropdownMenuTrigger`
    * `↳ DropdownMenuContent`
      * `↳ DropdownMenuLabel`
      * `↳ DropdownMenuSeparator`
      * `↳ DropdownMenuGroup (For Grouping)`
        * `↳ DropdownMenuItem`
        * `↳ DropdownMenuItem`
        * `↳ DropdownMenuShortcut (For keyboard shortcut)`
      * `↳ DropdownMenuSub (Submenu for nested items)`
        * `↳ DropdownMenuSubTrigger`
        * `↳ DropdownMenuSubContent`

* **(11) Field :-**
  * `This is designed to compose accessible forms.`
  
  ```jsx
  <Field>
      <FieldLabel> Username </FieldLabel>
      <FieldControl>
          {/* <Input />, <Select />, <Slider /> etc */}
      </FieldControl>
      <FieldDescription> ... </FieldDescription>
      <FieldError />
  </Field>
  ```

---

## Page 7: Input Group & Input
* **(12) Input Group :-**
  * `Display additional information/actions to an input/textarea.`
  * `↳ Input Group`
    * `↳ InputGroupAddon`
      * `↳ InputGroupButton`
    * `↳ InputGroupInput`
    * `↳ InputGroupText`
    * `↳ InputGroupTextarea`

  * **eg:** *(Diagram of Search input: 🔍 Search... 12 Result)*
    ```jsx
    <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
            <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end"> 12 Results </InputGroupAddon>
    </InputGroup>
    ```

* **(13) Input :-**
  ```jsx
  <Label htmlFor="picture"> Picture </Label>
  <Input id="picture" type="file" />
  {/* type can be file | email | password */}
  ```
  * *(Arrow points to Input)*: `disabled` to disable it.


# List of components that are like open / dropdown on click / hover

* Accordion
* Alert Dialog
* Alert
* Breadcrumb
* Card
* Carousel
* Chart
* Checkbox
* Command
* Dialog
* Drawer
* Dropdown Menu
* Field
* Form
* HoverCard
* Input Group
* Input OTP
* Input
* Menubar
* Navigation Menu
* Pagination
* Popover
* Progress

*(Other components listed in margin: RadioGroup, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner)*

---

# ① Components that is only for UI :-
*(Crossed out: Label, Aspect Ratio, Separator, Avatar, Text, Badge, Card)*

**Alert** -> Just render text in red color
↳ `AlertTitle`
↳ `AlertDescription`

# ② AspectRatio
```jsx
<AspectRatio ratio={16/9}>
   <img />
</AspectRatio>
```
Just a div with AR

# ③ Avatar
```jsx
<Avatar>
   <AvatarImage src="" alt />
   <AvatarFallback> CN </AvatarFallback>
</Avatar>
```

# ④ Button Group
-> Just to make a group of button with consistent styling.
```jsx
<ButtonGroup>
   <Button> 1 </Button>
   <Button> 2 </Button>
</ButtonGroup>
```

# ⑤ Calendar
`<Calendar>`

# ⑥ Card
`<Card>` -> Just gives you a card like feel

# ⑦ CheckBox
`<CheckBox>` -> Just render a check box -> used with a label

# ⑧ combobox
`<combobox>` -> It's just a name -> There is no component like combobox

---

# ⑭ Menubar
↳ A bar where there are multiple menus in a bar like & when you hover over them you see a list of actionable buttons/controls.

**Diagram:**
`[File] [Edit] [Profiles]`
*File drops down to:*
* New Tab (⌘T)
* New Window (⌘N)
* *(Separator)*
* Share -> (Email link, Message, Notes)

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      {/* other MenubarItems */}
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email Link</MenubarItem>
          <MenubarItem>Message</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

---

# ⑮ Navigation Menu
↳ It's perfect for headers with complex/rich feature.

**Diagram:**
`Home v | Components v | Docs | List v | Simple v | With Icon v`
-> on hover it will show all the feature of Home in a dropdown like

---

# ⑯ Pagination :-
`<Previous   1  [2]  3  ...   Next>`

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem> <PaginationLink> 1 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationLink> 2 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationLink> 3 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationEllipsis /> </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

# ⑰ Popover :-
```jsx
<Popover>
  <PopoverTrigger asChild>
    <Button> Open Popover </Button>
  </PopoverTrigger>
  <PopoverContent>
     {/* Put whatever you like here input, form, text etc */}
  </PopoverContent>
</Popover>
```

---

# ⑱ RadioGroup :-
**Diagram:**
`O item 1`
`O item 2`
`O item 3`

```jsx
<RadioGroup>
  <div>
     <RadioGroupItem value="1" id="r1" />
     <Label htmlFor="r1"> item 1 </Label>
  </div>
  <div></div>
  <div></div>
</RadioGroup>
```

---

# ⑲ ScrollArea :-
```jsx
<ScrollArea className="h-72 w-48 rounded-md ">
   <div className="p-4"> Items List </div>
   {items.map((item) => (
       <div key={item}> {item} </div>
       <Separator />
   ))}
</ScrollArea>
```

---

# ⑳ Select :-
List of option to pick from - triggered by a button.

**Diagram:**
`[ fruits v ]`

```jsx
<Select>
  <SelectTrigger>
     <SelectValue placeholder="fruits" />
  </SelectTrigger>
  <SelectContent>
     <SelectGroup>
        <SelectItem value="apple"> Apple </SelectItem>
        <SelectItem value="oat"> Oat </SelectItem>
        {/* ... */}
     </SelectGroup>
  </SelectContent>
</Select>
```

---

# ㉑ Sheet :-
↳ Just like dialog.
