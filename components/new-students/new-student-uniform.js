import Image from "next/future/image";
import React, { useState } from "react";
import ImageMosaic from "@lightbox-gallery/image-mosaic";
import ImageLightbox from "@lightbox-gallery/image-lightbox";

const images = [
  {
    src: "/images/uniform/uniform-sketch-boys.jpg",
    title: "Uniform Sketch Boys",
    width: 200,
    height: 300,
  },
  {
    src: "/images/uniform/uniform-sketch-girls.jpg",
    title: "Uniform Sketch Girls",
    width: 200,
    height: 300,
  },
];

export default function NewStudentUniform() {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="p-2 p-lg-5 bg-asb-accent">
        <h3 className="page-title">Uniform</h3>
        <p>
          The School places great emphasis on the values of wearing the correct
          uniform and dressing appropriately. Wearing a uniform is a badge of
          pride, creates an identity for the school and is an important part of
          being a school student. A school uniform teaches students to dress
          smartly and take pride in their appearance. A uniform diminishes
          economic and social barriers between students and helps keep students
          focused on their education, not their clothes. The school has
          authorized <strong>M/s Uniform City</strong> and{" "}
          <strong>M/s Master Uniforms </strong>
          to supply The Asian School uniforms in the Kingdom of Bahrain.
        </p>

        <h5>UNIFORM SPECIFICATIONS</h5>
        <div className="text-center">
          <div className="my-5 mx-auto">
            <ImageMosaic 
              images={images.map((image) => ({
                src: image.src,
                title: image.title,
                width: image.width,
                height: image.height,
              }))}
              handleClick={(e, { index }) => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />

            <ImageLightbox
              currentImageIndex={currentImageIndex}
              setCurrentIndex={setCurrentIndex}
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              images={images}
            />
          </div>
        </div>

        <h4 className="fw-bold mt-5 mb-3">REGULAR UNIFORM</h4>
        <Image
          className="img-fluid  my-4"
          src="/images/uniform/regular-uniform.jpg"
          alt="uniform"
          layout="responsive"
          width={600}
          height={400}
        />
        <h5>PINAFORE</h5>
        <ul>
          <li>The color of the pinafore should be the approved mocha color.</li>
          <li>
            The zip on the back of the pinafore should run from the top of the
            pinafore till the cut where the box pleats start. The box pleats
            should start from the bust area of the pinafore. This should be 1 –
            1.5 inches below the underarm cut (for the shirt sleeve) of the
            pinafore for Grades 1 to 5 and 1.5 – 2 inches for Grades 6 to 10.
          </li>
          <li>
            Box Pleats size: Measure the breadth of the pinafore from side to
            side. Divide this into 3 parts. The size of each box pleat will be
            one part, thus the size of the 2 box pleats will be 2 parts. The
            third part will be split as the 2 gaps between each box pleat and
            the side. The same should be followed for the 2 box pleats on the
            back of the uniform.
          </li>
          <li>
            The school logo will be placed on the left side chest area of the
            pinafore just below the shoulder strap. The centre of the logo crest
            should be below and in line with the inner edge of the shoulder
            strap. The logo crest should be 1.5 inches from the bottom edge of
            the shoulder strap.
          </li>
          <li>
            There should be a loop to hold the sash in place on the right side
            of the pinafore. The loop should have a press button fastener on the
            bottom while the top end of the loop should be stitched to the
            pinafore.
          </li>
          <li>
            The sash will be worn around the lower end of the waist of the
            student so the loop needs to be positioned accordingly.
          </li>
          <li>
            The knot and loose ends of the sash should fall on the left side.
          </li>
          <li>
            The pinafore will have a pocket on the right side just below the
            sash hook. The length of the pinafore should be till just below the
            knee of the student.
          </li>
          <li>
            The depth (back fold) of the box pleat should be 1.5 inches for
            students of LKG to Grade 5 and 2 inches for students of Grades 6 to
            10. This applies to the box pleats in the front and the back.
          </li>
        </ul>

        <h5>SASH</h5>
        <ul>
          <li>
            The colour of the sash should be mocha brown, same as the pant and
            pinafore, with black stripes. Sash has to be worn by students of
            Grades 1 to 10.
          </li>
          <li>LKG and HKG students do not need to wear a sash.</li>
          <li>
            The width of each stripe on the sash should be 0.5 inches. The gap
            between 2 stripes on the sash should be 1.5 inches.
          </li>
          <li>
            The sash should have a slant cut at both ends (same slant angle at
            both ends).
          </li>
          <li>
            First stripe should start 1.5 inches from the bottom of the broad
            end of the sash and parallel to the slant cut of the sash.
          </li>
          <li>Stripes on the sash should run from top right to bottom left.</li>
          <li>
            The sash should be long enough so that the broad end of the sash
            falls till the knee of the student and the narrow end of the sash
            falls halfway between the knot and the knee.
          </li>
          <li>
            The broad end of the sash should be 2 inches. The narrow end of the
            sash should be 1 inch. The rest of the sash will be 2 inches wide.
          </li>
        </ul>

        <h5>LEGGINGS/TIGHTS</h5>
        <ul>
          <li>
            Short leggings/tights should be compulsorily worn by all girls and
            should only be black. They should be 1 inch above the hem of the
            pinafore and SHOULD NOT be visible when the uniform is worn.
          </li>
        </ul>

        <h5>SHIRT</h5>
        <ul>
          <li>The color of the shirt should be white.</li>
          <li>
            The school logo will be placed on the left pocket of the shirt for
            boys. There should be no school logo on the shirt for girls.
          </li>
          <li>Shirts may have long or short sleeves.</li>
          <li>
            Full sleeved vests may not be worn underneath short-sleeved shirts.
          </li>
        </ul>

        <h5>PANT</h5>
        <ul>
          <li>The color of the pant should be the approved mocha color.</li>
          <li>
            Elastic pants will be allowed only for students of classes LKG to
            Grade 5.
          </li>
          <li>
            Students of Grades 6 to 10 will NOT be allowed to wear elastic
            pants.
          </li>
          <li>The pants can be flat fronts or have 1 pleat.</li>
          <li>
            The pants should be sufficiently lose and should not be slim fit.
          </li>
        </ul>

        <h5>TIE</h5>
        <ul>
          <li>
            The color of the tie should be mocha, same as the pant and pinafore,
            with black stripes. Stripes on the tie should run from top right to
            bottom left.
          </li>
          <li>
            Stripes on the tie should be parallel to base slant of the tie.
          </li>
          <li>
            First stripe should start from the bottom of the tie, 1.5 inches
            from the base. The width of each stripe on the tie should be 0.5
            inches.
          </li>
          <li>The gap between 2 stripes on the tie should be 1.5 inches.</li>
          <li>
            The bottom width of the tie should be 2.5 inches (for smaller length
            ties), 2.75 inches (for medium length ties) and 3 inches (for longer
            length ties).
          </li>
          <li>
            Velcro ties will be allowed for students of Grades 1 to 5. LKG and
            HKG students do not need to wear ties.
          </li>
          <li>Grade 6 to 10 students will need to wear full length ties.</li>
          <li>
            The material used for the tie should be the approved material.
          </li>
        </ul>

        <h5>BLAZER</h5>
        <ul>
          <li>The colour of the blazer should be black with a sheen.</li>
          <li>
            The school logo will be placed on the left blazer pocket on the
            chest of the blazer for both boys and girls. The chest pocket with
            the logo should have rounded edges at the bottom corners. The blazer
            should have 2 buttons.
          </li>
          <li>Blazer should be worn by students of Grades 8, 9 and 10.</li>
          <li>
            The back of the blazer should have 1 cut (fin) in the bottom middle.
          </li>
          <li>
            The bottom edges on the front base of the blazer should be rounded
            and NOT square.
          </li>
        </ul>

        <h5>LOGO </h5>
        <strong>Blazer Logo</strong>
        <ul>
          <li>
            The size of the logo should be such that the gap between the 2
            points of the crest is 2 inches. The breadth will be as per aspect
            ratio.
          </li>
        </ul>

        <strong>Shirt and Pinafore Logo</strong>
        <ul>
          <li>
            The size of the logo should be such that the gap between the 2
            points of the crest is 1.5 inches. The breadth will be as per aspect
            ratio.
          </li>
        </ul>

        <h5>SWEATER/CARDIGAN</h5>
        <ul>
          <li>
            Sweaters or cardigans should only be plain simple black with no
            designs.
          </li>
          <li>Hooded sweaters and cardigans will NOT be allowed.</li>
        </ul>

        <h5>CAPS</h5>
        <ul>
          <li>
            Woollen caps may be worn in the winter while outside but must be
            removed when indoors.
          </li>
        </ul>

        <h5>HEADSCARVES</h5>
        <ul>
          <li>
            Headscarves should only be plain white with no designs. They should
            be worn short in such a manner that the tie and school crest is
            visible.
          </li>
        </ul>

        <h5>BELT</h5>
        <ul>
          <li>
            A SIMPLE black leather belt must compulsorily be worn by boys of
            Grades 6 to 10.
          </li>
        </ul>

        <h5>SHOES</h5>
        <ul>
          <li>
            Only flat, plain black leather shoes with no designs will be allowed
            for boys and girls.
          </li>
        </ul>

        <h5>SOCKS</h5>
        <ul>
          <li>
            Only plain white socks will be allowed for all and they should not
            have any other design or colour on them. Ankle length socks will not
            be allowed. Full length white stockings may be worn by the girls
            during winter. (White tights tucked into white socks or the other
            way around is unacceptable).
          </li>
        </ul>

        <h4 className="fw-bold mt-5 mb-3">P.T. UNIFORM</h4>
        <Image
          className="img-fluid my-4"
          src="/images/uniform/pt-uniform.jpg"
          alt="uniform"
          layout="responsive"
          width={600}
          height={400}
        />
        <p className="mb-0">
          To be worn only on every Sunday. T-shirts should be long enough to be
          tucked into the pant/skirt.
        </p>
        <p className="mb-0">
          <strong>Boys:</strong> Plain white shorts 4 inches above the knees
          during summer or plain white trousers during winter along with white
          t-shirts adorning the school logo.
        </p>
        <p>
          <strong>Girls:</strong> White divided skirts with box pleats (knee
          length) and white t-shirts with the school logo.
        </p>

        <h5>DIVIDED SKIRT</h5>
        <ul>
          <li>The color of the skirt should be white.</li>
          <li>The skirt should have 2.5” pleats.</li>
          <li>The zipper can be at the back or on the side.</li>
          <li>The waist band of the skirt should be elastic.</li>
        </ul>

        <h5>P.T. SHOES (BOYS & GIRLS)</h5>
        <ul>
          <li>
            Plain white sports shoes and white socks. No fancy shoes will be
            allowed.
          </li>
        </ul>

        <h4 className="fw-bold mt-5 mb-3">GENERAL APPEARANCE</h4>
        <ul>
          <li>
            Uniforms must be neat, clean, and free from stains, wrinkles, holes,
            and bad odour.
          </li>
          <li>
            Haircuts for boys should be short and neat, off the ears and collar.
            Girls with short hair must wear a white hairband. Girls with hair
            below shoulder length should make two plaits, tied with white
            ribbons. Unconventional hairstyles are not acceptable. Students may
            not dye or highlight their hair in any way.
          </li>
          <li>Students must keep their nails clean and trimmed.</li>
          <li>
            Girls may wear small, simple studs as earrings. Nose studs will not
            be allowed. No other ornaments will be allowed. Boys are also not
            allowed to wear earrings or bracelets.
          </li>
          <li>
            Absolutely no make-up will be allowed, including eyeliner or kajal
            and nail polish.
          </li>
        </ul>
      </section>
    </>
  );
}
