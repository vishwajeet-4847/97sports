const Footer = () => {
  return (
    <div className="inner-footer bg-white py-6">
      {/* Support Links */}
      <div class="flex flex-wrap items-center space-y-2 text-black">
  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="hover:underline">Privacy Policy</a>
 
  
  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="hover:underline flex items-center">
    Rules and Regulations <span class="ml-1">|</span>
  </a>

  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="hover:underline flex items-center">
    KYC <span class="ml-1">|</span>
  </a>
 

  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="hover:underline flex items-center">
    Terms and Conditions <span class="ml-1">|</span>
  </a>
 

  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="hover:underline flex items-center">
    Responsible Gambling <span class="ml-1">|</span>
  </a>
</div>


      {/* Extra Content (Android App Download) */}
      <div className="extra-wrap flex justify-center mt-4">
        <div className="appdl-link-android">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            <img
              src="./../../../assets/androidapk.png"
              alt="Download Android App"
              className="w-40 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
