import React from "react";
import headshot from "./images/headshot.jpg";

const Profile = () => {
  return (
    <div>
      <div className="container center profile-section">
        <div>
          <img className="image-circle" src={headshot} alt="headshot" />
        </div>
        <div>
          <h2>A little about me</h2>
          <p>
            Quisque rhoncus accumsan fermentum. Phasellus finibus enim non
            pellentesque finibus. Aenean suscipit mi facilisis elit bibendum, at
            sodales velit pharetra. Donec non purus et felis gravida tempus.
            Duis convallis, enim blandit sollicitudin ultricies, erat quam
            euismod metus, nec aliquam mi augue eu nulla. In tincidunt eget ex
            eget consequat. Aenean viverra risus magna, vel pretium velit
            sollicitudin vitae. Pellentesque vel sem ut erat tincidunt
            ullamcorper id eu orci. Duis pretium ultricies volutpat. Maecenas
            laoreet magna nec purus elementum, ut volutpat justo tempor.{" "}
          </p>
          <p>
            Praesent imperdiet turpis vitae risus cursus, non feugiat erat
            fermentum. Etiam placerat feugiat laoreet. Praesent aliquet nisl in
            maximus eleifend. Aliquam dictum sapien in enim lobortis vulputate
            ut vitae leo. Sed tincidunt, enim vitae tempor sagittis, ex turpis
            aliquam lectus, quis volutpat sem sem eu tortor. Morbi quis augue
            ullamcorper, posuere urna sit amet, dictum nunc. Integer tristique,
            purus in blandit commodo, magna nisl facilisis elit, in facilisis
            velit ante vitae risus. Vivamus bibendum mollis gravida. Phasellus
            auctor diam congue aliquet gravida. Nam sapien leo, molestie
            dignissim ligula et, congue mollis lectus. Maecenas hendrerit, erat
            sit amet semper porttitor, lorem odio consequat risus, at bibendum
            arcu nulla id urna. Mauris fringilla, erat id fermentum ultrices, mi
            elit dapibus turpis, a accumsan risus arcu a leo.{" "}
          </p>
          <p>
            Nullam lobortis convallis ante ac volutpat. Nulla eget volutpat
            nunc. Suspendisse a convallis neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque posuere metus id elit
            interdum rhoncus. Sed rutrum leo ac est vehicula malesuada. Ut in
            commodo nibh. Cras volutpat tortor sit amet ligula ultrices rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
