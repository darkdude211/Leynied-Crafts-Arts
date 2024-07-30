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

  document.getElementById('bagTrigger').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('bagModal'), {
      keyboard: false
    });
    myModal.show();
  });
