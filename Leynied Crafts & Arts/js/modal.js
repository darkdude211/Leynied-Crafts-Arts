  document.addEventListener('DOMContentLoaded', function () {
    var friendshipBraceletModal = new bootstrap.Modal(document.getElementById('friendshipBraceletModal'));
    var friendshipBraceletItem = document.getElementById('friendshipBraceletItem');

    friendshipBraceletItem.addEventListener('click', function () {
      friendshipBraceletModal.show();
    });

    document.getElementById('friendshipBraceletModal').addEventListener('shown.bs.modal', function () {
      console.log('Friendship Bracelet modal is now shown');
    });

    document.getElementById('friendshipBraceletModal').addEventListener('hidden.bs.modal', function () {
      console.log('Friendship Bracelet modal is now hidden');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var satinEmbroideryModal = new bootstrap.Modal(document.getElementById('satinEmbroideryModal'));
    var satinEmbroideryItem = document.getElementById('satinEmbroideryItem');

    satinEmbroideryItem.addEventListener('click', function () {
      satinEmbroideryModal.show();
    });

    document.getElementById('satinEmbroideryModal').addEventListener('shown.bs.modal', function () {
      console.log('Satin Embroidery modal is now shown');
    });

    document.getElementById('satinEmbroideryModal').addEventListener('hidden.bs.modal', function () {
      console.log('Satin Embroidery modal is now hidden');
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const earringsItem = document.getElementById('earringsItem');
    const earringsModal = new bootstrap.Modal(document.getElementById('earringsModal'));

    earringsItem.addEventListener('click', function() {
      earringsModal.show();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var necklaceModal = new bootstrap.Modal(document.getElementById('necklaceModal'));
    var necklaceItem = document.getElementById('necklaceItem');

    necklaceItem.addEventListener('click', function () {
      necklaceModal.show();
    });

    document.getElementById('necklaceModal').addEventListener('shown.bs.modal', function () {
      console.log('Necklace modal is now shown');
    });

    document.getElementById('necklaceModal').addEventListener('hidden.bs.modal', function () {
      console.log('Necklace modal is now hidden');
    });
  });

  document.getElementById('alphaBraceletTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('alphaBraceletModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('alphaKeychainTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('alphaKeychainModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var hairclipModal = new bootstrap.Modal(document.getElementById('hairclipModal'));
    var hairclipItem = document.getElementById('hairclipItem');

    hairclipItem.addEventListener('click', function () {
      hairclipModal.show();
    });

    document.getElementById('hairclipModal').addEventListener('shown.bs.modal', function () {
      console.log('Hairclip modal is now shown');
    });

    document.getElementById('hairclipModal').addEventListener('hidden.bs.modal', function () {
      console.log('Hairclip modal is now hidden');
    });
  });

  document.getElementById('bagTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('bagModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('braceletTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('braceletModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('broochTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('broochModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('chandelierTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('chandelierModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('dreamCatcherTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('dreamCatcherModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('earringsTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('earringsModal'), {
      keyboard: false
    });
    myModal.show();
  });

  document.getElementById('hairPinTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('hairPinModal'), {
      keyboard: false
    });
    myModal.show();
  });
