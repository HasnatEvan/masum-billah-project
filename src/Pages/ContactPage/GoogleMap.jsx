const GoogleMap = () => {
    return (
        <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
            <iframe
                title="Graphics Amazon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2333219466743!2d90.39315048605208!3d23.75689347501764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a6fc6e9e91%3A0xf9196a13a817cb9f!2sAl-Madina%20Group!5e0!3m2!1sen!2sbd!4v1764506131135!5m2!1sen!2sbd"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
