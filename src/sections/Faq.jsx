import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"


function Faq() {
  return (
    <section className="py-12 w-full max-w-4xl p-6 mx-auto">
      <div className="text-center">
        <Badge variant="outline">FAQs</Badge>
        <h1 className="py-4 text-4xl lg:text-6xl font-bold">Frequently Asked Questions</h1>
      </div>

      <div className="mt-6">
        <Accordion className="w-full divide-y" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium  ">
            Why EasyPass?
            </AccordionTrigger>
            <AccordionContent className="p-4">
            EasyPass is the simplest and most efficient way to manage your travel history. Unlike traditional methods that involve cluttered stamps and manual record-keeping, EasyPass uses advanced MRZ scanning technology to instantly extract and organize your travel data. Our user-friendly interface ensures that accessing and managing your travel records has never been easier. With top-tier security and seamless data export options, EasyPass is designed for modern travelers who value convenience and privacy. Experience a smarter, cleaner way to keep track of your global journeys.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium  ">
            How does the MRZ Scanner work?
            </AccordionTrigger>
            <AccordionContent className="p-4">
            Our MRZ Scanner uses optical character recognition (OCR) technology to scan the Machine Readable Zone (MRZ) of your passport. The scanner extracts key data such as your name, nationality, passport number, and travel history, which is then displayed in a clean and organized format.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium">
            Is my travel data secure?
            </AccordionTrigger>
            <AccordionContent className="p-4">
            Yes, your travel data is completely secure. All information is encrypted and stored using industry-leading security protocols. We prioritize your privacy, and only you have access to your data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium">
            Does the MRZ Scanner work for all passports?
            </AccordionTrigger>
            <AccordionContent className="p-4">
            Yes, the MRZ Scanner is compatible with passports from most countries that feature a Machine Readable Zone (MRZ). Whether your passport is biometric or traditional, if it includes an MRZ code, our scanner can read it and retrieve your travel history.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

    </section>
  )
}

export default Faq;