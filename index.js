module.exports = function TeraTimeStamps(mod) {
  if (mod.majorPatchVersion >= 85) {
    mod.error('You are trying to use Timestamps on patch 85 or higher. The functionality is now integrated into the game client itself. Please enable it in the game options and uninstall the Timestamps mod, as it will no longer be updated!');
    return;
  }
  mod.installGPK("S1UI_BaseUI.gpk");
}