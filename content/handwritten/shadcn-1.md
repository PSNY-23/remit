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
