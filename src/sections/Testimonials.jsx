import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

function Testimonials() {
  return (
    <section className="py-12 w-full max-w-4xl p-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-8 mx-auto">
        <div className="text-center">
          <Badge variant="outline">Our Satisfied Customers</Badge>
          <h1 className="py-4 text-6xl font-bold">Client Testimonials</h1>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-64 sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent className="px-4">
            <CarouselItem className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2">
              <Card className="flex flex-col items-center text-center p-6 h-full">
                <Avatar className="w-20 h-20 border-2">
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  John Doe
                </h3>
                <div className="flex flex-col h-full">
                  <p className="mt-4 text-gray-500">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid exercitationem culpa laborum ut. Quasi dolore cum
                    maiores, sed omnis possimus."
                  </p>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2">
              <Card className="flex flex-col items-center text-center p-6 h-full">
                <Avatar className="w-20 h-20 border-2">
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>KP</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  Kelly Pooja
                </h3>
                <div className="flex flex-col h-full">
                  <p className="mt-4 text-gray-500">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid exercitationem culpa laborum ut. Quasi dolore cum
                    maiores, sed omnis possimus."
                  </p>
                </div>
              </Card>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2">
              <Card className="flex flex-col items-center text-center p-6 h-full">
                <Avatar className="w-20 h-20 border-2">
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  John Doe
                </h3>
                <div className="flex flex-col h-full">
                  <p className="mt-4 text-gray-500">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid exercitationem culpa laborum ut. Quasi dolore cum
                    maiores, sed omnis possimus."
                  </p>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
