import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function CTA() {
  return (
    <section className="py-12 container px-4 md:px-6">
      <div className="bg-primary rounded-lg p-8 shadow-md text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left container space-y-6">
            <p className="text-4xl font-bold mb-8 leading-10">
              Scan, Track, and Travel Effortlessly
            </p>{" "}
            {/* Increased bottom margin */}
            <p className="text-lg leading-6">
              Eliminate the clutter of passport stamps and embrace a digital
              solution for your travel history. By simply scanning the MRZ code
              of your passport, access an organized list of your visited
              countries—bringing clarity and convenience to your journeys
            </p>
            <Button variant="outline">
              {" "}
              Get Started <ChevronRight />
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              alt="f1"
              height="720"
              src="assets/passport_banner.jpg"
              style={{
                aspectRatio: "1080/720",
              }}
              width="720"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
